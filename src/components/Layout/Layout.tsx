import React from 'react'
import Aux from '../../hoc/Aux'
const Layout =(props:any)=>(
<Aux>
<div>This is toolbar</div>
<main>{props.children}</main>
</Aux>
)
export default Layout;