from .database import db
from .user import User

class Comment(db.EmbeddedDocument):
    text = db.StringField()
    user = db.ReferenceField(User)
