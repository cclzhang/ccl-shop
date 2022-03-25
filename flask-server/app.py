import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
# Members API Route

@app.route("/")
def hello_world():
    return "hello world"
    
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2"]}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__=="__main__":
    app.run(debug=True)