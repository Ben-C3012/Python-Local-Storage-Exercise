from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
from database import fakeDatabase  

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

def check_login(username, password):
    user = next((user for user in fakeDatabase if user['username'] == username and user['password'] == password), None)
    return user is not None

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if check_login(username, password):
        token = jwt.encode({'username': username}, 'secret-key', algorithm='HS256')
        return jsonify({'token': token})
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

@app.route('/checkToken', methods=['POST'])
def check_token():
    data = request.get_json()
    token = data.get('token')

    try:
        jwt.decode(token, 'secret-key', algorithms=['HS256'])
        return jsonify({'status': 'OK'})
    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401

if __name__ == '__main__':
    app.run(port=3000)