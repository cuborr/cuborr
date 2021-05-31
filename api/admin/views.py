import os
from dotenv import load_dotenv
from flask import Blueprint, jsonify, request
from models.assignment import Assignment
from models.user import User
from models.contractor import Contractor
from models.client import Client
from models.metrics import PageVisit

load_dotenv()

admin_blueprint = Blueprint('admin', __name__)


@admin_blueprint.route('/api/admin/assignments')
def retrieve_assignments():
    header_key = request.headers.get('X-Master-Key')
    environ_key = os.environ.get('MASTER_KEY')

    if not header_key:
        return "A header is missing in order to access this endpoint", 401
    if not environ_key:
        return "Environment variable is missing", 401
    if environ_key != header_key:
        return "Wrong master key", 401

    assignments = Assignment.objects()
    return jsonify(assignments), 200


@admin_blueprint.route("/api/admin/assignment/<path:path>", methods=['DELETE'])
def delete_assignments(path):
    header_key = request.headers.get('X-Master-Key')
    environ_key = os.environ.get('MASTER_KEY')

    if not header_key:
        return "A header is missing in order to access this endpoint", 401
    if not environ_key:
        return "Environment variable is missing", 401
    if environ_key != header_key:
        return "Wrong master key", 401

    try:
        assignment = Assignment.objects.get(pk=path)
        assignment.delete()
    except:
        return "error.notFound", 404

    return '', 204


@admin_blueprint.route('/api/admin/assignments/count')
def retrieve_assignments_count():
    header_key = request.headers.get('X-Master-Key')
    environ_key = os.environ.get('MASTER_KEY')

    if not header_key:
        return "A header is missing in order to access this endpoint", 401
    if not environ_key:
        return "Environment variable is missing", 401
    if environ_key != header_key:
        return "Wrong master key", 401

    count = Assignment.objects().count()
    return str(count), 200


@admin_blueprint.route('/api/admin/page-visits/count')
def page_visits_count():
    header_key = request.headers.get('X-Master-Key')
    environ_key = os.environ.get('MASTER_KEY')

    if not header_key:
        return "A header is missing in order to access this endpoint", 401
    if not environ_key:
        return "Environment variable is missing", 401
    if environ_key != header_key:
        return "Wrong master key", 401

    count = PageVisit.objects().count()
    return str(count), 200


@admin_blueprint.route('/api/admin/contractors/count')
def contractors_count():
    header_key = request.headers.get('X-Master-Key')
    environ_key = os.environ.get('MASTER_KEY')

    if not header_key:
        return "A header is missing in order to access this endpoint", 401
    if not environ_key:
        return "Environment variable is missing", 401
    if environ_key != header_key:
        return "Wrong master key", 401

    count = Contractor.objects().count()
    return str(count), 200


@admin_blueprint.route('/api/admin/clients/count')
def clients_count():
    header_key = request.headers.get('X-Master-Key')
    environ_key = os.environ.get('MASTER_KEY')

    if not header_key:
        return "A header is missing in order to access this endpoint", 401
    if not environ_key:
        return "Environment variable is missing", 401
    if environ_key != header_key:
        return "Wrong master key", 401

    count = Client.objects().count()
    return str(count), 200


@admin_blueprint.route('/api/metrics/page-visit')
def register_visit():
    header = request.headers.get('Authorization')

    if header is None:
        PageVisit().save()
    else:
        header = header.replace('Token ', '')
        try:
            user = User.objects.get(pk=header)
            PageVisit(user=user).save()
        except:
            PageVisit().save()

    return "", 201
