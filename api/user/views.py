import json
from flask import Blueprint, jsonify, request
from models.contractor import Contractor

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
