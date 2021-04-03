import json
import requests
from uuid import uuid4
from flask import Blueprint, jsonify, request, abort, send_from_directory
from werkzeug.utils import secure_filename
from configurations import BaseConfig as config
from api.services.file_upload import allowed_file, file_extension
from models.client import Client
from models.assignment import Assignment

assignment_blueprint = Blueprint('assignment', __name__)

@assignment_blueprint.route('/api/assignment', methods=['POST'])
def create_assignment():
    header = request.headers.get('Authorization')
    if header is None:
        fname = request.form.get('firstName')
        lname = request.form.get('lastName')
        addr = request.form.get('streetAddress')
        city = request.form.get('city')
        pc = request.form.get('postalCode')
        country = request.form.get('country')
        email = request.form.get('email')
        number = request.form.get('phoneNumber')
        

        # validate form
        if None in [fname, lname, addr, city,
                pc, country, email, number]:
            return "error.invalidDataProvided", 400

        client = Client(
            first_name=fname,
            last_name= lname,
            street_address=addr,
            city=city,
            postal_code=pc,
            country=country,
            email=email,
            phone_number=number
        ).save()
    else:
        header = header.replace('Token ', '')
        try:
            client = Client.objects.get(pk=header)
        except:
            return "error.notFound", 404

        fname = client.first_name
        lname = client.last_name

    title = request.form.get('title')
    compen = request.form.get('compensation')
    curren = request.form.get('currency')
    notes = request.form.get('notes')

    # validate form
    if None in [title, compen, curren]:
        return "error.invalidDataProvided", 400

    if 'file' not in request.files:
        return "error.noFileProvided", 400
    
    file = request.files['file']

    if "/" in file.filename:
        return "error.invalidFile", 400
    
    if file and allowed_file(file.filename):
        filename = f'{fname.lower()}_{lname.lower()}_{str(uuid4())[:8]}.{file_extension(file.filename)}'
        file.save(f'{config.UPLOAD_DIRECTORY}/{filename}')

    

    assignment = Assignment(
        title=title,
        compensation=compen,
        currency=curren,
        notes=notes,
        file=filename,
        client=client
    ).save()

    # Assignment.objects.delete()
    # Client.objects.delete()
    # return "error.invalidDataProvided", 400

    return jsonify(assignment), 201


@assignment_blueprint.route('/api/assignments')
def retrieve_assignments():
    assignments = Assignment.objects(state="states.open")
    return jsonify(assignments), 200


@assignment_blueprint.route("/api/assignment/download/<path:path>")
def retrieve_file(path):
    """Download a file."""
    return send_from_directory(config.UPLOAD_DIRECTORY, path, as_attachment=True)


@assignment_blueprint.route("/api/assignment/<path:path>/apply")
def apply_for_assignments(path):
    try:
        assignment = Assignment.objects.get(pk=path)
    except:
        return "error.notFound", 404
    
    return jsonify({ 'hi': ' hi' }), 201

@assignment_blueprint.route('/api/assignment/<path:path>', methods=['DELETE', 'GET'])
def assignemnt_detail(path):
    header = request.headers.get('Authorization')
    try:
        assignment = Assignment.objects.get(pk=path)
    except:
        return "error.notFound", 404
    if request.method == 'DELETE':
        # assignment.delete()
        if header is None:
            return 'error.unauthorized', 401
        header = header.replace('Token ', '')
        if str(assignment.client.id) != header:
            return 'error.unauthorized', 401
        assignment.delete()
        return '', 204
    return '', 200
