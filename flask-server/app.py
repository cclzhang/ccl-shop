import os
from flask import Flask, jsonify, request, redirect, url_for, current_app, session, send_file
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
import sqlite3
import logging

from helpers import *
from database import *

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = '../client/src/assets'

app = Flask(__name__)
cors = CORS(app)

# Control maximum size a request can be [1024 = 1mb]
app.config['MAX_CONTENT_LENGTH'] = 5120 * 5120

# Check that file extension matches the following
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.gif', '.jpeg', '.svg', '.tiff']

cart = []

conn = sqlite3.connect('inventory.db')

conn.close()

@app.route("/", methods=['GET'])
def index():

    return {
        "name": ["apples", "oranges"]
    }
    
@app.route("/garage", methods=['GET', 'POST'])
def garage_products():
    
    # Connect to database
    con = sqlite3.connect("inventory.db")

    # Convert rows from tuple to dict
    con.row_factory = dict_factory

    # Fetch data from database
    db = con.cursor()
    if request.method == "POST":
        global cart
        productId = request.get_json()["item"]

        db.execute("SELECT * FROM items WHERE product_name=?", [productId])
        item = db.fetchall()
        # print(item)
        cart.append(item[0])
        print(cart)
        return jsonify(cart)

        return jsonify(cart)
    # # Connect to database
    # con = sqlite3.connect("inventory.db")

    # # Convert rows from tuple to dict
    # con.row_factory = dict_factory

    # # Fetch data from database
    # db = con.cursor()
    db.execute("SELECT * FROM items")
    items = db.fetchall()
    print(cart)

    return jsonify(items)


@app.route("/writings", methods=['GET'])
def writings_products():
    # Connect to database
    con = sqlite3.connect("inventory.db")

    # Convert rows from tuple to dict
    con.row_factory = dict_factory

    # Fetch data from database
    db = con.cursor()
    db.execute("SELECT * FROM writings")
    writings = db.fetchall()

    return jsonify(writings)

@app.route("/learn", methods=['GET'])
def learn_products():
    # Connect to database
    con = sqlite3.connect("inventory.db")

    # Convert rows from tuple to dict
    con.row_factory = dict_factory

    # Fetch data from database
    db = con.cursor()
    db.execute("SELECT * FROM lessons")
    lessons = db.fetchall()

    return jsonify(lessons)

@app.route("/cart", methods=['GET'])
def userCart():
    return "hello cart"

@app.route("/testPage", methods=['GET', 'POST'])
def file_upload():
    if request.method == 'POST':
        file = request.files['image']

        destination = "/".join([UPLOAD_FOLDER, secure_filename(file.filename)])
        file.save(destination)

        # session['uploadFilePath'] = destination
        # response = {"imgName": file.filename, "imgPath": destination}
        # response.headers.add('Access-Control-Allow-Origin', '*')
        # file.headers.add('Access-Control-Allow-Origin', '*')
        return redirect("http://localhost:3000/testPage")
        
    return send_file(destination, mimetype='image/jpg')

@app.route("/test", methods=["POST"])
def test_input():
    name = request.json.get('name')
    current_app.logger.debug(name)
    return jsonify(name=name)

if __name__=="__main__":
    app.run(debug=True)