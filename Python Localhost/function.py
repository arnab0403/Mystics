from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import cv2
import numpy as np
from matplotlib import pyplot as plt


# Correctly formatted 'classes' list with the missing comma added
# classes = ['Pepper__bell___Bacterial_spot', 'Pepper__bell___healthy',
#            'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy',
#            'Tomato_Bacterial_spot', 'Tomato_Early_blight', 'Tomato_Late_blight',
#            'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot',
#            'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato__Target_Spot',
#            'Tomato__Tomato_YellowLeaf__Curl_Virus', 'Tomato__Tomato_mosaic_virus',
#            'Tomato_healthy']

classes=['Apple__Apple_scab', 'Apple_Black_rot', 'Apple_Cedar_apple_rust', 'Apple_healthy', 'Blueberry_healthy', 'Cherry(including_sour)__Powdery_mildew', 'Cherry(including_sour)__healthy', 'Corn(maize)__Cercospora_leaf_spot Gray_leaf_spot', 'Corn(maize)__Common_rust', 'Corn_(maize)__Northern_Leaf_Blight', 'Corn(maize)__healthy', 'Grape_Black_rot', 'Grape_Esca(Black_Measles)', 'Grape__Leaf_blight(Isariopsis_Leaf_Spot)', 'Grape__healthy', 'Orange_Haunglongbing(Citrus_greening)', 'Peach__Bacterial_spot', 'Peach_healthy', 'Pepper,_bell_Bacterial_spot', 'Pepper,_bell_healthy', 'Potato_Early_blight', 'Potato_Late_blight', 'Potato_healthy', 'Raspberry_healthy', 'Soybean_healthy', 'Squash_Powdery_mildew', 'Strawberry_Leaf_scorch', 'Strawberry_healthy', 'Tomato_Bacterial_spot', 'Tomato_Early_blight', 'Tomato_Late_blight', 'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot', 'Tomato_Spider_mites Two-spotted_spider_mite', 'Tomato_Target_Spot', 'Tomato_Tomato_Yellow_Leaf_Curl_Virus', 'Tomato_Tomato_mosaic_virus', 'Tomato__healthy']

def convert_image_to_array(image_dir):
    try:
        image = cv2.imread(image_dir)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        if image is not None:
            image = cv2.resize(image, (128, 128))   #256
            return img_to_array(image)
        else:
            print("Error: Image not loaded properly.")
            return np.array([])
    except Exception as e:
        print(f"Error: {e}")
        return None

def evaluate(image_location):
    loaded_model = load_model("./trained_plant_disease_model.keras")
    # image_location = r"F:\Programs\plant\backend\leaf-disease-detection-backend\wheat.jpg"
    im = convert_image_to_array(image_location)
    if im.size == 0:
        print("Error: Failed to process image.")
        return None


    # np_image_li = np.array(im, dtype=np.float16) / 255.0
    np_image_li = np.array(im,dtype=np.float16)
    npp_image = np.expand_dims(np_image_li,axis=0)  #axix#0


    result = loaded_model.predict(npp_image)
    itemindex = np.argmax(result)
    return classes[itemindex]
