from .database import db
from .client import Client

class Rating(db.EmbeddedDocument):
    quality = db.IntField()
    communication = db.IntField()
    shipping = db.IntField()
    
    text = db.StringField()
    client = db.ReferenceField(Client)
