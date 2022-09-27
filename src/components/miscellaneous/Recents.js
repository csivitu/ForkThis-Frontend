import { data } from 'autoprefixer'
import React from 'react'
import { useState, useEffect } from 'react'
import recentsHandler from '../../controllers/recentsHandler'

const Recents = () => {
    const [recents, setRecents] = useState([])
    useEffect(() => {
        const setData=()=>{
            const data=recentsHandler()
            setRecents(data)
        }
        setData();
    }, [])
    if(recents.length!=0){
        const recentData=[];
        recents.forEach(el=>{
            const obj={
                data:"",
                URL:"/"
            }
            if(el.type=='pr'){
                obj.data=`${el.user.username} raised a new Pull Request.`;
                if(el.prURL) obj.URL=el.prURL
            }
            else if(el.type=='issue'){
                obj.data=`${el.raisedBy.username} raised a new Issue in ${el.repo}.`;
                obj.URL=el.issueURL
            }
            else if(el.type=='challenge'){
                obj.data=`${el.raisedBy.username} raised a new Challenge.`;
                // obj.URL=  // redirect to challenges page
            }
            recentData.push(obj)
        })
    }
    return (
        <>
            {
                recentData.forEach(el=>{
                    <a href={el.URL}><div>{el.data}</div></a>
                })
            }
        </>
    )
}

export default Recents