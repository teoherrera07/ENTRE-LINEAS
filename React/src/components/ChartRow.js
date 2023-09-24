import React from 'react';


function ChartRow(props){
         
            return (

                <tr>
                    <td>{props.title}</td>
                    <td>{props.author}</td>
                    <td>{props.price}</td>
                    <td>
                        <ul>
                            {props.categories.length > 0 && props.categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category.name}</li>
                            )}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            { props.topics.length >0 && props.topics.map( (topic,i) => 
                                <li key={`topic ${i}`}>{topic.name}</li>
                            )}
                        </ul>
                    </td>
                </tr>
       ) }
            
    
    
        

export default ChartRow;