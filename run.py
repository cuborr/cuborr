import os
from flask import (send_from_directory,
                   jsonify, render_template, request, abort, Flask)
from configurations import BaseConfig
from models.database import db
from api.core.views import core_blueprint

try:
    PRODUCTION = os.environ["FLASK_ENV"] == "production"
    CONFIG_PATH = 'configurations.ProductionConfig'
except KeyError:
    PRODUCTION = False
    CONFIG_PATH = 'configurations.DevelopmentConfig'

if PRODUCTION:
    print('\033[91m' + 'Starting application in production settings' + '\033[0m')
else:
    print('\033[92m' + 'Starting application in DEVELOPMENT settings' + '\033[0m')

# create app
app = Flask(__name__, static_folder="./client/build")

# Load this config object for development mode
app.config.from_object(CONFIG_PATH)

# init database
db.init_app(app)

# Register blueprints
app.register_blueprint(core_blueprint)

@app.route("/")
def serve_react_app():
    """serves React App"""
    if PRODUCTION is True:
        return send_from_directory(app.static_folder, "index.html")
    return jsonify(message="Resource not found"), 404


@app.route("/<path:path>")
def static_proxy(path):
    """static folder serve"""
    if PRODUCTION is True:
        file_name = path.split("/")[-1]
        dir_name = os.path.join(app.static_folder, "/".join(path.split("/")[:-1]))
        return send_from_directory(dir_name, file_name)
    return jsonify(message="Resource not found"), 404


@app.errorhandler(404)
def handle_404(e):
    if request.path.startswith("/api/"):
        return jsonify(message="Resource not found"), 404
    return send_from_directory(app.static_folder, "index.html")


@app.errorhandler(405)
def handle_405(e):
    if request.path.startswith("/api/"):
        return jsonify(message="Mehtod not allowed"), 405
    return e


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
