import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView , TouchableOpacity} from 'react-native';

const ViewDetails = () => {

  const roomDetails = {
    roomNumber: "24",
    name: "Eman",
    hostelNumber: "2",
    allotmentTime: "10:00 AM,     August24,2024",
  };

  //FIREBASE

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('roomAllotments').get();
        const data = snapshot.docs.map(doc => doc.data());
        setRoomDetails(data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchData();
  }, []);

  // Assuming you have a document ID to update
const handleUpdate = async (docId) => {
  try {
    await db.collection('roomAllotments').doc(docId).update({
      name: 'Updated Name',
      // other fields...
    });
    Alert.alert("Update Successful", "Room details updated.");
  } catch (error) {
    Alert.alert("Error", "Failed to update room details.");
  }
};



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Room Details</Text>
         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
           </TouchableOpacity>
        <Image 
          source={require( '../assets/details.jpg')} 
          style={styles.image}
        />
        <Text style={styles.detailText}>Room Number: {roomDetails.roomNumber}</Text>
        <Text style={styles.detailText}>Name: {roomDetails.name}</Text>
        <Text style={styles.detailText}>Hostel Number: {roomDetails.hostelNumber}</Text>
        <Text style={styles.detailText}>Allotment Time: {roomDetails.allotmentTime}</Text>

          
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink', 
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
    button: {
    backgroundColor: 'skyblue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },

  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: '80%',
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  detailText: {
    fontSize: 18,
    color: 'darkblue',
    marginBottom: 10,
  },
});

export default ViewDetails;
