#!/bin/bash

# cd to android and run amplify pull
cd android
amplify pull
amplify codegen
cd ..

cd ios
amplify pull
amplify codegen
cd ..

cd react
amplify pull
amplify codegen
cd ..

echo "Pulled Data From Amplify!"