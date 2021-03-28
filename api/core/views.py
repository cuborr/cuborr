import json
import requests
from flask import Blueprint, jsonify, request
from configurations import BaseConfig as config

core_blueprint = Blueprint('core', __name__)


@core_blueprint.route('/api/hello-world')
def get_hello_world():
    return jsonify({ "key": 'Hello Wold'})

@core_blueprint.route('/api/user-config')
def get_user_config():
    user_config: dict = {
        "authority": config.IDENTITY_SERVER_HOST,
        "client_id": "reactflasktemplate",
        "redirect_uri": config.AUTH_REDIRECT_HOST + "/auth-callback",
        "response_type": "code",
        "scope": "openid profile",
        "post_logout_redirect_uri": config.AUTH_REDIRECT_HOST,
        "automaticSilentRenew": True,
        "silent_redirect_uri": config.AUTH_REDIRECT_HOST + "/auth-callback",
    }
    return jsonify(user_config)
