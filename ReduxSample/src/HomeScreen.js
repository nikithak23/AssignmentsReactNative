import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import React from 'react';
import {View,FlatList,List,Button,StyleSheet,Text,TouchableOpacity,SafeAreaView,} from 'react-native';
import {addNewNote, deleteOldNote} from './redux/actions/noteActions';

const HomeScreen = () => {
  const notes = useSelector(state => state.noteData.noteArr, shallowEqual);
  const dispatch = useDispatch();
  //dispatch actions
  const dispatchAddNote = note => dispatch(addNewNote(note));
  const dispatchDelNote = id => dispatch(deleteOldNote(id));

  const NoteView = ({item}) => {
    return (
      <TouchableOpacity onPress={() => dispatchDelNote(item.id)}>
        <Text>{item.note}</Text>
      </TouchableOpacity>
    );
  };

  const addNotes = () => {
    var today = new Date();
    var timeFormat =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    dispatchAddNote('Current Time :' + timeFormat);
     //dispatch(addNewNote('hi'));
  };

  return (
    // final Render code
   
    <View style={styles.container}>
      {notes.length === 0 ? (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You do not have any notes</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={notes}
            renderItem={({item}) => <NoteView item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
      <Button title="Add new note" onPress={() => addNotes()} />
    </View>
    
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop:30,
  },
  titleContainer: {},
});
export default HomeScreen;
