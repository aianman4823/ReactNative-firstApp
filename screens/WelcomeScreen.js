import React from 'react';
import {StyleSheet, Text, View ,ScrollView ,Dimensions} from 'react-native';

const SCREEN_WIDTH=Dimensions.get('window').width;
const  SLIDE_DATA=[
    {title:'Step: 1', text: 'aaa'},
    {title: 'Step: 2',text: 'bbb'},
    {title: 'Step: 3',text: 'ccc'},
];

class WelcomeScreen extends React.Component{
    renderSlides(){
        return SLIDE_DATA.map((slide,index)=>{
            return(
                <View 
                key={index}
                style={{flex:1,backgroundColor: 'skyblue',width:SCREEN_WIDTH, marginTop:"auto",marginBottom:"auto"}}
                >
                    <Text style={{fontSize:30, textAlign:"center"}}>{slide.title}</Text>
                    <Text style={{fontSize:30, textAlign:"center"}}>{slide.text}</Text>
                    <Text style={{fontSize:30, textAlign:"center"}}>{index + 1 } / 3</Text>
                </View>
            );
        });
    }

    render(){
        return(
            <ScrollView 
            horizontal          //horizontal={true}
            pagingEnabled       //pagingEnabled={true}
            style={{flex:1}}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

export default WelcomeScreen;