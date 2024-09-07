import React,{useState} from 'react'
import { useRouter } from 'next/router';
import { AppstoreOutlined, MailFilled, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Grid } from '@mui/material';
function Header() {
  const router = useRouter();
  return (
    <div>
      {
        router?.pathname.split('/')[1] === '' || router?.pathname.split('/')[1] === 'Login' 
        ?<></>
        :<Grid>header</Grid>
      }
    </div>
  )
}

export default Header