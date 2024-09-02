import { useContext, useEffect } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import logo from '../../assets/logoaprdigital-removebg.png';
import logoRonda from '../../assets/logoRondaDigital-removebg.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiMapPin, FiFileText, FiUsers, FiLogOut, FiLock } from "react-icons/fi";
import { MdPlayCircleFilled } from "react-icons/md";
import { Avatar, Tooltip } from '@mui/material';
import MenuMobile from './MenuMobile';

export default function Header() {
  const { user, signOut, redefinirPassword } = useContext(AuthContext);

  function expandMenu() {
    const element = document.getElementById("sidebar-menu");
    const width = element.offsetWidth;
    const queryObj = document.querySelectorAll("#label-menu");

    element.style.width = width >= 170 ? '50px' : '170px';
    document.getElementById("logo-apr").style.width = width >= 170 ? '120px' : 'fit-content';

    queryObj.forEach(i => {
      i.hidden = width >= 170;
    });
  }

  return (
    <div id='sidebar-menu' className={`sidebar ${user.area}`}>
      <Avatar
        id='logo-apr'
        variant="square"
        src={user.area === 'ronda' ? logoRonda : logo}
        onClick={() => expandMenu()}
      />

      <MenuMobile  className="menu-mobile" user={user} signOut={signOut} redefinirPassword={redefinirPassword} />

      <section id='menu'>
        {user.area === 'ronda' && (
          <>
            <Tooltip title="Aplicar Ronda" placement="right" arrow>
              <Link to="/newronda">
                <MdPlayCircleFilled color="#000" size={20} />
                <i id='label-menu'>Aplicar Ronda</i>
              </Link>
            </Tooltip>
            <Tooltip title="Rondas Realizadas" placement="right" arrow>
              <Link to="/dashboardrondas">
                <FiHome color="#000" size={20} />
                <i id='label-menu'>Rondas Realizadas</i>
              </Link>
            </Tooltip>
          </>
        )}

        {(user.area === 'patrimonial' || user.area === 'oem') && (
          <>
            <Tooltip title="Aplicar APR" placement="right" arrow>
              <Link to="/new">
                <MdPlayCircleFilled color="#000" size={20} />
                <i id='label-menu'>Aplicar APR</i>
              </Link>
            </Tooltip>
            <Tooltip title="APRs" placement="right" arrow>
              <Link to="/dashboard">
                <FiHome color="#000" size={20} />
                <i id='label-menu' >APRs</i>
              </Link>
            </Tooltip>
          </>
        )}

        {user.nivel === 'administrador' && (
          <>
            <Tooltip title="Novo Site" placement="right" arrow>
              <Link to="/new_site">
                <FiMapPin color="#000" size={20} />
                <i id='label-menu'>Novo Site</i>
              </Link>
            </Tooltip>
            <Tooltip title="Gerenciar Perfis" placement="right" arrow>
              <Link to="/profileadm">
                <FiUsers color="#000" size={20} />
                <i id='label-menu'>Gerenciar Perfis</i>
              </Link>
            </Tooltip>
            <Tooltip title="Relatório" placement="right" arrow>
              <Link to="/reports">
                <FiFileText color="#000" size={20} />
                <i id='label-menu'>Relatório</i>
              </Link>
            </Tooltip>
            <Tooltip title="Registrar Usuário" placement="right" arrow>
              <Link to="/register">
                <FiUsers color="#000" size={20} />
                <i id='label-menu'>Registrar Usuário</i>
              </Link>
            </Tooltip>
          </>
        )}

        {user.nivel === 'revisor' && (
          <Tooltip title="Relatório" placement="right" arrow>
            <Link to="/reports">
              <FiFileText color="#000" size={20} />
              <i id='label-menu'>Relatório</i>
            </Link>
          </Tooltip>
        )}

        <Tooltip title="Meu Perfil" placement="right" arrow>
          <Link to="/profile">
            <FiUser color="#000" size={20} />
            <i id='label-menu'>Meu Perfil</i>
          </Link>
        </Tooltip>

        <Tooltip title="Trocar Senha" placement="right" arrow>
          <a onClick={() => redefinirPassword()}>
            <FiLock color="#000" size={20} />
            <i id='label-menu'>Trocar Senha</i>
          </a>
        </Tooltip>

        <Tooltip title="Sair" placement="right" arrow>
          <a onClick={() => signOut()}>
            <FiLogOut color="#000" size={20} />
            <i id='label-menu'>Sair</i>
          </a>
        </Tooltip>
      </section>
    </div>
  );
}
