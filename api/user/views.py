import json
from flask import Blueprint, jsonify, request
from models.contractor import Contractor
from models.client import Client
from models.rating import Rating

user_blueprint = Blueprint('user', __name__)

@user_blueprint.route('/api/contractor', methods=['POST'])
def create_contractor():
    record = json.loads(request.data)
    fname = record.get('firstName')
    lname = record.get('lastName')
    country = record.get('country')

    email = record.get('email')
    number = record.get('phoneNumber')

    name = record.get('printerName')
    inum = record.get('itemNumber')
    mat = record.get('material')
    
    
    # validate form
    if None in [fname, lname, country, email,
            number, name, mat, inum]:
        return "error.invalidDataProvided", 400

    contractor = Contractor(
        first_name=fname,
        last_name= lname,
        country=country,
        email=email,
        phone_number=number,
        printer_name=name,
        item_number=inum,
        material=mat,
    ).save()
    
    return jsonify(contractor), 201


@user_blueprint.route('/api/contractor/<path:path>/rating', methods=['POST'])
def create_contractor_rating(path):
    header = request.headers.get('Authorization')
    if header is None or path == header.replace('Token ', ''):
        return 'error.unauthorized', 401
    try:
        contractor = Contractor.objects.get(pk=path)
        client = Client.objects.get(pk=header.replace('Token ', ''))
    except:
        return "error.notFound", 404
    
    record = json.loads(request.data)

    quality = record.get('quality')
    communication = record.get('communication')
    shipping = record.get('shipping')
    
    # validate form
    if None in [quality, communication, shipping]:
        return "error.invalidDataProvided", 400

    try:
        # find existing rating
        Contractor.objects.get(rating__client=header.replace('Token ', ''), pk=path)
        rating = {}
    except:
        rating = Rating(
            quality=quality,
            communication=communication,
            shipping=shipping,
            client=client
        )

        contractor.rating.append(rating)
        contractor.save()
    
    return jsonify(rating), 201
