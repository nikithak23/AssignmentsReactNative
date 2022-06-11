import React, {useEffect, useState} from 'react';
import {Text,View, StyleSheet,Image,Button,ScrollView,TextInput,FlatList,TouchableOpacity,} from 'react-native';
import SearchDisplay from './SearchDisplay';

const SearchList=[
         {id:1, title:"Pizza", img:'https://static.toiimg.com/thumb/79782927.cms?width=680&height=512&imgsize=258975'},
         {id:2, title:"Pasta", img:'https://www.foodiecrush.com/wp-content/uploads/2020/05/Penne-Marinara-Sauce-foodiecrush.com-004.jpg'},
         {id:3, title:"Burger", img:'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc='},
         {id:4, title:"Ice Cream", img:'https://www.simplyrecipes.com/thmb/-sTsh3q4CwqGJ_d0NxQrTIXIvGI=/4256x2832/filters:fill(auto,1)/Simply-Recipes-Cinnamon-Ice-Cream-LEAD-7-b2521994de79447b9fb08bae81d2362f.jpg'},
         {id:5, title:"Noodles", img:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles.jpg'},
         {id:6, title:"Soup", img:'https://t4.ftcdn.net/jpg/01/68/33/97/360_F_168339759_37Ce1cNC8IwueUfqXUYC805iq5uQQt4K.jpg'},
         {id:7, title:"Biriyani", img:'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yot9zfocxiqxeghusxny'},
         {id:8, title:"Rolls", img:'https://curlytales.com/wp-content/uploads/2019/09/roll.jpg'},
         {id:9, title:"Fries", img:'https://www.thebossykitchen.com/wp-content/uploads/2021/05/French-fries-720x720.jpg'},
         {id:10, title:"Pizza Hut", description:"Pizza, FastFood", img:'https://b.zmtcdn.com/data/pictures/0/3100000/97e19c1e08d060fd6033c1bb420fd366.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'},
         {id:11, title:"Diesel Cafe", description:"American, Continental, Italian", img:'https://ajayananth.files.wordpress.com/2018/04/from-l-to-r-sharabi-banana-pancakes-baked-chicken-feast-mains-cafe-mocha-at-diesel-cafe-balmatta-road-mangalore.jpg'},
         {id:12, title:"Barbeque Nation", description:"North Indian, Kebab, BBQ", img:'https://b.zmtcdn.com/data/pictures/1/3100441/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'},
         {id:13, title:"KFC", description:"Burger, Fast Food, Beverages", img:'https://b.zmtcdn.com/data/pictures/chains/2/3100042/9ee6101602467638dafc335c2a69d459_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'},
         {id:14, title:"Village Restaurant", description:"South Indian, Mangalorean, Arabian", img:'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/04/blog_chandigarh-1030x538.jpg'},
         {id:15, title:"Pallkhi Restaurant", description:"North Indian, Mughlai", img:'https://content.jdmagicbox.com/comp/mangalore/v1/0824px824.x824.000077471174.o6v1/catalogue/pallkhi-fine-dine-restaurant-mangalore-multicuisine-restaurants-x8qrhb.jpg'},
         {id:16, title:"Natural Ice Cream", description:"Ice Cream, Desserts", img:'https://b.zmtcdn.com/data/pictures/2/10152/296924581afbaa6749d8d1d290b6a92f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'}
];



const SearchPage = () => {
    const [enteredText, setEnteredText] = useState ('');
    const [searchedItems, setSearchedItems] = useState([]);

    useEffect (() => {
        setSearchedItems(SearchList.filter(item=>
            {return item.title.toLowerCase().includes(enteredText.toLowerCase());}
            ),
            );
        },[enteredText, SearchList]);

        const renderFlatList = () => {
            return (
            <View style={styles.list}>
             {searchedItems.length <= 0 ? (<Text style={styles.message}>Sorry Unable to find the item</Text>):
                (   <FlatList
                    data={searchedItems}
                    keyExtractor = {(item,index)=>item.id} //index not reqd //only if you need a index add this
                    initialNumToRender={4}
                    showVerticalScrollIndicator={false}
                    renderItem={({item})=>(
                    <SearchDisplay //SearchDisplay is a custom component created in SearchDisplay.js
                    id={item.id} title={item.title} img={item.img}/>
                    )}/>
                )}
            </View>
            );
        }
return (
        <View style={styles.container}>
        <View style={styles.innerContainer}></View>
        <TextInput
            onChangeText={value => setEnteredText(value)}
            value={enteredText} 
            style={styles.input} 
            placeholder="Search for Food, Restaurants...."  
        />
        {enteredText !== '' ? renderFlatList() : null}
        </View>
    );
}

export default SearchPage;

const styles = StyleSheet.create({
    list: {
      marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor:'pink',
    },
    input: {
        color:'mediumvioletred',
        fontSize:17,
        textAlign: 'center',
        marginTop:20,
        marginHorizontal: 10,
        height: 42,
        borderWidth: 2,
        borderColor: 'mediumvioletred',
        borderRadius: 8,
        backgroundColor: "#eddfdf"
    },
    innerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    message: {
      fontSize: 18,
      color:'mediumvioletred',
      fontWeight:'bold',
      textAlign: 'center',
    },
     
  });