const firebaseConfig = {
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  
  // Add data
firestore.collection('products').add({
    name: 'Product Name',
    price: 19.99,
    // ... other details
  });
  
  // Retrieve data
  firestore.collection('products').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

  