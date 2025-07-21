from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS 

# Load the trained crop model
with open("crop_model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

app = Flask(__name__)
CORS(app)  

# Crop Prediction Route
@app.route('/predict-crop', methods=['POST'])
def predict_crop():
    try:
        data = request.json
        
        # Extract input values from request data
        features = [
            float(data.get('nitrogen', 0)),
            float(data.get('phosphorus', 0)),
            float(data.get('potassium', 0)),
            float(data.get('temperature', 0)),
            float(data.get('humidity', 0)),
            float(data.get('ph', 0)),
            float(data.get('rainfall', 0))
        ]

        # Model expects data in numpy array
        prediction = model.predict([np.array(features)])
        
        return jsonify({"predicted_crop": prediction[0]})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=8000)
