import React, { Component } from 'react'
import Modal from '../UI/Modal/Modal'
import Auxiliary from '../../hoc/Auxiliary'
// import axios from 'axios'

function withErrorHandler(WrappedComponent,axios) {
    // console.log(WrappedComponent)
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount () {
            console.log("[withError] compodidMoun")
            this.reqInterceptors =  axios.interceptors.request.use(req => {
                this.setState({
                    error:null
                })
                return req; 
            })
            this.resInterceptors = 
            axios.interceptors.response.use(res => res, error => {
                this.setState({error:error})
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.request.eject(this.resInterceptors)
        }

        errorConfirmedHandler = () => {
            this.setState(
                {
                    error:null
                }
            )
        }

        render(){
            // console.log('[withErrorHandler]')
            {
                console.log("[withError] wrapperdCompo Mount")
        }
            return (
				<Auxiliary>
					<Modal 
                        show={this.state.error}
                        ordered= {this.errorConfirmedHandler}
                        >
                        {
                           this.state.error ? this.state.error.message : null
                        }
                        
                    </Modal>
                    
					<WrappedComponent {...this.props} />

				</Auxiliary>
			);
        }
    } 

}

export default withErrorHandler
