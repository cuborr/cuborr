import datetime
from .database import db
from .user import User

class PageVisit(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.utcnow)
    user = db.ReferenceField(User, required=False)
