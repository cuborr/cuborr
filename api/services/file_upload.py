ALLOWED_EXTENSIONS = {'stl', 'obj', 'amf', '3mf', 'zip'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def file_extension(filename):
    return filename.rsplit('.', 1)[1]