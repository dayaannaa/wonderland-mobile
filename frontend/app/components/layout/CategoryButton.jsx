import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryButton = ({ categoryName, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryButton} onPress={onPress}>
      <Text style={styles.categoryText}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    backgroundColor: '#e6e6e6', 
    borderRadius: 25,          
    paddingVertical: 10,       
    paddingHorizontal: 20,      
    marginRight: 12,            
    alignItems: 'center',     
    justifyContent: 'center',   
    maxHeight: 40,
    fontFamily: 'Poppins', 
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',          
  },
});

export default CategoryButton;
