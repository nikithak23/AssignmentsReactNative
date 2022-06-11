import React, { useState } from 'react';
import { ListItem, SearchBar } from "react-native-elements";
import {FlatList, Button, Text, StyleSheet, TouchableOpacity, SafeAreaView, View, Image, ScrollView,TextInput}from 'react-native';
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import { StackActions } from '@react-navigation/native';




const homeScreen=({navigation})=>{

    const TopCards=[
        {id:1, img:'https://i.pinimg.com/originals/5a/45/df/5a45dfb66ad12013cb17a7d055ebf2ab.jpg'},
        {id:2, img:'https://www.sbicard.com/sbi-card-en/assets/media/images/personal/offers/categories/dining/buffet/d-buffet-festival.jpg'},
        {id:3, img:'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618567105730/zomato-gold.jpg'},
        {id:4, img:'https://www.netsolutions.com/insights/wp-content/uploads/2019/06/Discounts-and-Cashback-offers.jpg'},
        {id:5, img:'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg'},
      ];
       const categories=[
         {id:1, title:"Pizza", img:'https://static.toiimg.com/thumb/79782927.cms?width=680&height=512&imgsize=258975'},
         {id:2, title:"Pasta", img:'https://www.foodiecrush.com/wp-content/uploads/2020/05/Penne-Marinara-Sauce-foodiecrush.com-004.jpg'},
         {id:3, title:"Burger", img:'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc='},
         {id:4, title:"Ice Cream", img:'https://www.simplyrecipes.com/thmb/-sTsh3q4CwqGJ_d0NxQrTIXIvGI=/4256x2832/filters:fill(auto,1)/Simply-Recipes-Cinnamon-Ice-Cream-LEAD-7-b2521994de79447b9fb08bae81d2362f.jpg'},
         {id:5, title:"Noodles", img:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles.jpg'},
         {id:6, title:"Soup", img:'https://t4.ftcdn.net/jpg/01/68/33/97/360_F_168339759_37Ce1cNC8IwueUfqXUYC805iq5uQQt4K.jpg'},
         {id:7, title:"Biriyani", img:'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yot9zfocxiqxeghusxny'},
         {id:8, title:"Rolls", img:'https://curlytales.com/wp-content/uploads/2019/09/roll.jpg'},
         {id:9, title:"Fries", img:'https://www.thebossykitchen.com/wp-content/uploads/2021/05/French-fries-720x720.jpg'},
       ];
       const restaurants=[
         {id:1, title:"Pizza Hut", description:"Pizza, FastFood", img:'https://b.zmtcdn.com/data/pictures/0/3100000/97e19c1e08d060fd6033c1bb420fd366.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'},
         {id:2, title:"Diesel Cafe", description:"American, Continental, Italian", img:'https://ajayananth.files.wordpress.com/2018/04/from-l-to-r-sharabi-banana-pancakes-baked-chicken-feast-mains-cafe-mocha-at-diesel-cafe-balmatta-road-mangalore.jpg'},
         {id:3, title:"Barbeque Nation", description:"North Indian, Kebab, BBQ", img:'https://b.zmtcdn.com/data/pictures/1/3100441/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'},
         {id:4, title:"KFC", description:"Burger, Fast Food, Beverages", img:'https://b.zmtcdn.com/data/pictures/chains/2/3100042/9ee6101602467638dafc335c2a69d459_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'},
         {id:5, title:"Village Restaurant", description:"South Indian, Mangalorean, Arabian", img:'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/04/blog_chandigarh-1030x538.jpg'},
         {id:6, title:"Pallkhi Restaurant", description:"North Indian, Mughlai", img:'https://content.jdmagicbox.com/comp/mangalore/v1/0824px824.x824.000077471174.o6v1/catalogue/pallkhi-fine-dine-restaurant-mangalore-multicuisine-restaurants-x8qrhb.jpg'},
         {id:7, title:"Natural Ice Cream", description:"Ice Cream, Desserts", img:'https://b.zmtcdn.com/data/pictures/2/10152/296924581afbaa6749d8d1d290b6a92f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'}
       ];
      const prevOrder=[
        {id:1, title:"Diesel Cafe",description:"American, Continental, Italian",img:'https://ajayananth.files.wordpress.com/2018/04/from-l-to-r-sharabi-banana-pancakes-baked-chicken-feast-mains-cafe-mocha-at-diesel-cafe-balmatta-road-mangalore.jpg' },
        {id:2, title:"Pizza Hut",description:"Pizza, FastFood",img:'https://b.zmtcdn.com/data/pictures/0/3100000/97e19c1e08d060fd6033c1bb420fd366.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*' },
        {id:3, title:"Barbeque Nation",description:"North Indian, Kebab, BBQ",img:'https://b.zmtcdn.com/data/pictures/1/3100441/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*' },
      ];
      
      
     
      const renderItem1=({item})=> {
        const pushAction = StackActions.push('Discount Details', {photo:item.img});
          return(
            <TouchableOpacity onPress={()=>{navigation.dispatch(pushAction)}}>
              <Card style = {styles.topCards}>
              <CardImage source={{uri:item.img}} />
              </Card>   
            </TouchableOpacity>
            )
      }
      
      const renderItem2=({item})=>{
        const pushAction = StackActions.push('Previous Order Details', {orderRest:item.title, orderDesc:item.description,photo:item.img});
        return(
        <TouchableOpacity onPress={()=>{navigation.dispatch(pushAction)}}>
          <View style={styles.prevOrder}>
            <Image style={styles.prevOrderImg} source={{uri:item.img}}></Image>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.prevOrderTitle}>{item.title}</Text>
            <Text style={styles.prevOrderDesc}>{item.description}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )
      }
   

      const renderItem3=({item})=>{
        const pushAction = StackActions.push('Category Details', {categName:item.title,photo:item.img});
        return(
        <TouchableOpacity onPress={()=>{navigation.dispatch(pushAction)}}>
            <View style={styles.categContent}>
            <Image style={styles.categImage} source={{uri:item.img}}></Image>
            <Text style={styles.categ}>{item.title}</Text>
            </View>
        </TouchableOpacity>
      )
      }
      
      
      const renderItem4=({item})=>{
        const pushAction = StackActions.push('Restaurant Details', {photo:item.img,restaurant:item.title, restDescription:item.description});
        return(
            <TouchableOpacity onPress={()=>{navigation.dispatch(pushAction)}}> 
              <Card style = {styles.bottomCards}>
              <CardImage source={{uri:item.img}} />
              <Text style = {styles.restName}>{item.title}</Text>
              <Text style = {styles.restDesc}>{item.description}</Text>
              </Card>   
            </TouchableOpacity>
            )
      }
      


      
    return(
          <SafeAreaView style={styles.container}>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}> 
          
            <TouchableOpacity style={styles.searchBar} onPress={()=>{navigation.navigate('SearchPage')}} >
              <Text style={styles.textInput}>Search for Food, Restaurants....</Text>
            </TouchableOpacity>
           

              <Text style={styles.title}>Deals of the day!!</Text>
              <FlatList
              data={TopCards}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
              horizontal={true}
              scrollEnabled={true} 
              showsHorizontalScrollIndicator={false}
            />
            
            
            <View>
              <Text style={styles.title}>Previously ordered</Text>
              <FlatList
              data={prevOrder}
              renderItem={renderItem2}
              keyExtractor={item => item.id}
              horizontal={false}
              scrollEnabled={true} 
              showsVerticalScrollIndicator={false}
            />
            </View>
            
            <Text style={styles.title}>Categories</Text>
              <FlatList
              data={categories}
              renderItem={renderItem3}
              keyExtractor={item => item.id}
              horizontal={true}
              scrollEnabled={true} 
              showsHorizontalScrollIndicator={false}
            />  
            
            <View>
            <Text style={styles.title}>Restaurants Nearby...</Text>
              <FlatList
              data = {restaurants}
              renderItem = {renderItem4}
              keyExtractor = {item => `${item.id}`}
              horizontal= {false}
              scrollEnabled={true} 
              showsVerticalScrollIndicator={false}
            />
            </View>
            </ScrollView>
          </SafeAreaView>
      
        );
  }
  export default homeScreen;





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'pink',
  
    },
    title: {
      fontSize: 25,
      marginTop:20,
      marginHorizontal: 10,
      color:'mediumvioletred',
      fontWeight:'bold'
    },
    topCards:{
      padding:10, 
      margin:10 , 
      backgroundColor:"#eddfdf", 
      width:250,
      height:150, 
      marginBottom:15,
      borderColor:'mediumvioletred',
      borderWidth:1
      
    },
    prevOrder:{
      flexDirection:'row',
      borderColor:'mediumvioletred',
      borderWidth:1,
      borderRadius:15,
      paddingLeft:10,
      padding:5,
      marginVertical: 5,
      marginHorizontal: 10,
      backgroundColor:"#eddfdf"
    },
    prevOrderImg:{
      width:60,
      height:60,
    },
    prevOrderTitle:{
      fontSize:17,
      fontWeight:'bold',
      color:'mediumvioletred',
      marginLeft:10  
    },
    prevOrderDesc:{
      fontSize:15,
      color:'palevioletred',
      marginLeft:10 ,
      fontWeight:'500' 
    },
    categContent:{
      padding: 5,
      marginTop:10,
      marginBottom: 15,
      marginHorizontal: 10,
      borderColor:'mediumvioletred',
      borderWidth:1,
      backgroundColor:"#eddfdf",
      borderRadius:20,
    },
   categImage:{
      width:60,
      height:60,
      borderRadius:30
    },
    categ:{
      fontSize:15,
      color:'mediumvioletred',
      fontWeight:'bold',
      textAlign:'center'
    },
    bottomCards:{
      padding:10, margin:10, backgroundColor:"#eddfdf", width:370,height:280,marginTop:5
    },
    restName:{
      fontSize:19,
      color:'mediumvioletred',
      fontWeight:'bold'
    },
    restDesc:{
      fontSize:15,
      color:'palevioletred',
      fontWeight:'500'
    },
    searchBar: {
      color:'mediumvioletred',
      textAlign: 'center',
      marginTop:20,
      marginHorizontal: 10,
      height: 42,
      borderWidth: 2,
      borderColor: 'mediumvioletred',
      borderRadius: 8,
      backgroundColor: "#eddfdf"
    } ,
    textInput:{
      fontSize:15,
      color:'mediumvioletred',
      fontWeight:'400',
      textAlign:'center',
      padding:8
    }

  });
  

  //<TextInput 
 // style={styles.textInput}
  //underlineColorAndroid='transparent'
  //onPress={()=>navigation.navigate('search')}
  //icon={()=><Ionicons name="search" size={18} color='black' />}/>
