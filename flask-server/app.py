import os
from urllib import response
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
app.config['UPLOAD_EXTENSIONS'] = [
    '.jpg', '.png', '.gif', '.jpeg', '.svg', '.tiff']

conn = sqlite3.connect('inventory.db')

conn.close()


@app.route("/", methods=['GET'])
def index():
    # Connect to database
    con = sqlite3.connect("inventory.db")

    # Convert rows from tuple to dict
    con.row_factory = dict_factory

    # Fetch data from database
    db = con.cursor()

    db.execute("SELECT * FROM items")
    garage = db.fetchall()

    db.execute("SELECT * FROM writings")
    writings = db.fetchall()

    db.execute("SELECT * FROM lessons")
    learn = db.fetchall()

    products = {'garage': garage, 'writings': writings, 'learn': learn}

    return jsonify(products)


@app.route("/garage", methods=['GET', 'POST'])
def garage_products():
    if response.method == 'POST':
        data = request.get_json('writings')
        return jsonify(data)
    return jsonify('hi')


@app.route("/writings", methods=['GET', 'POST'])
def writings_products():
    if response.method == 'POST':
        data = request.json('writings')
        return jsonify(data)
    return jsonify('hi')


@app.route("/learn", methods=['GET', 'POST'])
def learn_products():
    if response.method == 'POST':
        data = request.json('writings')
        return jsonify(data)
    return jsonify('hi')


@app.route("/owner/inventory", methods=['GET'])
def garage_upload():
    # if response.method == 'POST':
    #     data = request.json('writings')
    #     return jsonify(data)
    return jsonify('hi')


if __name__ == "__main__":
    app.run(debug=True)
