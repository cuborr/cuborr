from os import environ

class BaseConfig(object):
    REACT_SCRIPTS_DEV_SERVER_HOST = "http://localhost:3000"
    DB_USER = environ.get("DB_USER", "root")
    DB_HOST = environ.get("DB_HOST", "db:27017")
    DB_PASSWORD = environ.get("DB_PASSWORD", "databasepw")
    IDENTITY_SERVER_HOST = environ.get(
        "IDENTITY_SERVER_HOST", "http://localhost:3000")
    AUTH_REDIRECT_HOST = environ.get(
        "AUTH_REDIRECT_HOST", "http://localhost:3000")

class ProductionConfig(BaseConfig):
    DEBUG = False
    TESTING = False


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    TESTING = True
