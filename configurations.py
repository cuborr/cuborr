from os import environ

class BaseConfig(object):
    MONGODB_SETTINGS = {
        'db': environ.get("DB_NAME", "main"),
        'host': environ.get("DB_HOST", "db"),
        'port': int(environ.get("DB_PORT", "27017")),
    }
    IDENTITY_SERVER_HOST = environ.get(
        "IDENTITY_SERVER_HOST", "http://localhost:9000")
    AUTH_REDIRECT_HOST = environ.get(
        "AUTH_REDIRECT_HOST", "http://localhost:9000")
    UPLOAD_DIRECTORY = "/usr/src/web/uploads"


class ProductionConfig(BaseConfig):
    DEBUG = False
    TESTING = False


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    TESTING = True
