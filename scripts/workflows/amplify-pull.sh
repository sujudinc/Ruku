#!/bin/bash

# cd android
# amplify pull -y
# amplify codegen
# cd ..

# cd ios
# amplify pull -y
# amplify codegen
# cd ..

cd react
amplify pull -y
amplify codegen
cd ..

echo "Pulled Data From Amplify!"