import React from 'react';
import './UserMenu.css';

const UserMenu = () => {
  return (
    <div className="UserMenu">
      <div className="MenuHeader">
        <div className="AkajCeNaSchvLenie">Čakajúce na schválenie</div>
      </div>
      <div className="MenuSeparator">
        <div className="Rule" />
      </div>
      <div className="MenuSection">
        <div className="MenuItem">
          <div className="User" />
          <div className="Body">
            <div className="Row">
              <div className="Label">Kávej</div>
            </div>
            <div className="Description">Pred hodinou</div>
          </div>
        </div>
        <div className="MenuItem">
          <div className="User" />
          <div className="Body">
            <div className="Row">
              <div className="Label">Festival Goraľ</div>
            </div>
            <div className="Description">Pred 3 dňami</div>
          </div>
        </div>
        <div className="MenuItem">
          <div className="Lock" />
          <div className="Body">
            <div className="Row">
              <div className="Label">Vatra Malý Lipník</div>
            </div>
            <div className="Description">Pred týždňom</div>
          </div>
        </div>
      </div>
      <div className="MenuSection">
        <div className="MenuItem">
          <div className="LogOut" />
          <div className="Body">
            <div className="Row">
              <div className="Label">Dni obce Matysová</div>
              <div className="MenuShortcut" />
            </div>
            <div className="Description">Pred 2 týždňami</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
