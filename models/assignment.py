from .database import db
from .client import Client
from .contractor import Contractor
from .comment import Comment

class Assignment(db.Document):
    title = db.StringField()
    compensation = db.StringField()
    file = db.StringField()
    currency = db.StringField()
    notes = db.StringField(required=False)

    # states.open | states.assigned | states.closed
    state = db.StringField(default="states.open")

    # list fields
    applicants = db.ListField(db.ReferenceField(Contractor))
    comments = db.ListField(db.EmbeddedDocumentField(Comment))
    # reference
    client = db.ReferenceField(Client)
    contractor = db.ReferenceField(Contractor)
