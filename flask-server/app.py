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

    db.execute("SELECT * FROM items ORDER BY id DESC")
    garage = db.fetchall()

    db.execute("SELECT * FROM writings ORDER BY id DESC")
    writings = db.fetchall()

    db.execute("SELECT * FROM lessons ORDER BY id DESC")
    learn = db.fetchall()

    products = {'garage': garage, 'writings': writings, 'learn': learn}

    return jsonify(products)


@app.route("/garage", methods=['GET', 'POST'])
def garage_products():
    if request.method == 'POST':
        data = request.get_json()

        try:
            con = sqlite3.connect("inventory.db")
            con.row_factory = dict_factory
            db = con.cursor()

            if 'type' in data:
                # return jsonify(data['id'])
                db.execute("""
                    DELETE FROM items
                    WHERE id=?
                """, (data['id'],))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute("SELECT * FROM items ORDER BY id DESC")
                item = db.fetchall()
                db.close()
                return jsonify(item)

            elif 'id' in data:
                db.execute("""
                    UPDATE items
                    SET product_name = ?,
                        image = ?,
                        stock = ?,
                        description = ?,
                        price = ?
                    WHERE
                        id=?
                """, (
                    data["product_name"],
                    data["image"],
                    int(data["stock"]),
                    data["description"],
                    float(data["price"]),
                    data['id']
                ))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute("SELECT * FROM items ORDER BY id DESC")
                item = db.fetchall()
                db.close()
                return jsonify(item)

            else:
                db.execute("""
                    INSERT INTO items(product_name, image, stock, description, price)
                    VALUES(?, ?, ?, ?, ?)
                """, (
                    data["product_name"],
                    data["image"],
                    int(data["stock"]),
                    data["description"],
                    float(data["price"])
                ))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute(
                    "SELECT * FROM items WHERE id=(SELECT MAX(id) FROM items)")
                item = db.fetchall()
                db.close()
                return jsonify(item)

        except Exception as e:
            print(e)
            con.rollback()
            print("error in insert operation")
        finally:
            con.close()
            print("The SQLite connection is closed")

    return 'get request'


@app.route("/writings", methods=['GET', 'POST'])
def writings_products():
    if request.method == 'POST':
        data = request.get_json()

        try:
            con = sqlite3.connect("inventory.db")
            con.row_factory = dict_factory
            db = con.cursor()

            if 'type' in data:
                db.execute("""
                    DELETE FROM writings
                    WHERE id=?
                """, (data['id'],))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute("SELECT * FROM writings ORDER BY id DESC")
                writings = db.fetchall()
                db.close()
                return jsonify(writings)

            if 'id' in data:
                db.execute("""
                    UPDATE writings
                    SET title = ?,
                        stock = ?,
                        summary = ?,
                        price = ?
                    WHERE
                        id=?
                """, (
                    data["title"],
                    int(data["stock"]),
                    data["summary"],
                    float(data["price"]),
                    data['id']
                ))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute("SELECT * FROM writings ORDER BY id DESC")
                writing = db.fetchall()
                db.close()
                return jsonify(writing)

            else:
                # db.execute(sqlite_insert, data_tuple)
                db.execute("""
                    INSERT INTO writings(title, stock, summary, price)
                    VALUES(?, ?, ?, ?)
                """, (
                    data["title"],
                    int(data["stock"]),
                    data["summary"],
                    float(data["price"])
                ))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute(
                    "SELECT * FROM writings WHERE id=(SELECT MAX(id) FROM writings)")
                writing = db.fetchall()

                db.close()
                return jsonify(writing)

        except Exception as e:
            print(e)
            con.rollback()
            print("error in insert operation")
        finally:
            con.close()
            print("The SQLite connection is closed")

    return 'get request'


@app.route("/learn", methods=['GET', 'POST'])
def learn_products():
    if request.method == 'POST':
        data = request.get_json()

        try:
            con = sqlite3.connect("inventory.db")
            con.row_factory = dict_factory
            db = con.cursor()
            if 'type' in data:
                db.execute("""
                    DELETE FROM lessons
                    WHERE id=?
                """, (data['id'],))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute("SELECT * FROM lessons ORDER BY id DESC")
                lesson = db.fetchall()
                db.close()
                return jsonify(lesson)
            if 'id' in data:
                db.execute("""
                    UPDATE lessons
                    SET lesson_name = ?,
                        duration_minutes = ?,
                        price = ?
                    WHERE
                        id=?
                """, (data["lesson_name"], int(data["duration_minutes"]), float(data["price"]), data['id']))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute("SELECT * FROM lessons ORDER BY id DESC")
                lesson = db.fetchall()
                db.close()
                return jsonify(lesson)

            else:
                # return jsonify(data)
                db.execute("""
                    INSERT INTO lessons(lesson_name, duration_minutes, price)
                    VALUES(?, ?, ?)
                """, (
                    data["lesson_name"],
                    int(data["duration_minutes"]),
                    float(data["price"])
                ))
                con.commit()
                print(
                    "Python Variables inserted successfully into SqliteDb_developers table")

                db.execute(
                    "SELECT * FROM lessons WHERE id=(SELECT MAX(id) FROM lessons)")
                lesson = db.fetchall()

                db.close()
                return jsonify(lesson)

        except Exception as e:
            print(e)
            con.rollback()
            print("error in insert operation")

        finally:
            con.close()
            print("The SQLite connection is closed")

    return 'get request'


@app.route("/owner", methods=['GET', 'POST'])
def owner_login():
    if request.method == 'POST':
        data = request.get_json()
        if data['username'] == 'a':
            if data['password'] == "a":
                return jsonify(0)
            else:
                return jsonify(2)
        else:
            return jsonify(1)
    return "login get response"


if __name__ == "__main__":
    app.run(debug=True)
