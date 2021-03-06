import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
     Addition, 
     Button, 
     HeaderWrapper, 
     Logo, 
     Nav, 
     NavItem, 
     NavSearch, 
     SearchWrapper 
    } from './style';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
        return (
           <HeaderWrapper>
              <Logo href='/'></Logo>
              <Nav>
                  <NavItem className="left active">首页</NavItem>
                  <NavItem className="left">下载App</NavItem>
                  <NavItem className="right">登录</NavItem>
                  <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                  </NavItem>
                  <SearchWrapper>
                      <CSSTransition
                        timeout={200}
                        in={this.state.focused}
                        classNames="slide"
                      >
                        <NavSearch
                            className={this.state.focused ? 'focused': ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        ></NavSearch>
                     </CSSTransition>
                        <span className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe77d;</span>
                        
                  </SearchWrapper>
              </Nav>
              <Addition>
                  <Button className="writting">
                  <span className="iconfont">&#xe687;</span>
                      写文章
                  </Button>
                  <Button className="reg">注册</Button>
              </Addition>
           </HeaderWrapper>
        )
    }
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        this.setState({
            focused:false

        })
    }
}
export default Header;