import Searching from "../../components/Searching";
import {useDispatch, useSelector} from 'react-redux';
import {getListMusic} from "../../stores/container";
import {Col, Empty, Row} from "antd";
import Item from "../../components/Item";
const Home = () => {
    const dispatch = useDispatch()
    const {listMusic} = useSelector(state=> state.container)

    function handleSearching(value){
        dispatch(getListMusic(value))
    }

    return (
        <div style={{height: '100%', background: '#e2e2e3'}}>
           <Row justify={'end'} style={{paddingTop: 10, marginRight: 5}}>
               <Searching onSearch={handleSearching}/>
           </Row>
            <Row gutter={[32,64]} style={{marginTop:20}}>
                {listMusic.length ?
                    listMusic.map((item, index)=>{
                        return <Col xxl={4} xl={6} lg={6} sm={12} xs={24} md={12} style={{display:"flex", justifyContent:'center'}}>
                            <Item key={index} value={item}/>
                        </Col>
                    })
                    :
                   <div style={{display:'grid', placeItems:'center', width: '100%'}}>
                       <Empty />
                   </div>
                }
            </Row>
        </div>
    );
};

export default Home;