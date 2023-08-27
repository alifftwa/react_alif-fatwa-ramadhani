<nav class="navigationWrapper">
  <div class="logoWrapper">
    <span class="stylish">Stylish</span>
    <span class="logo">Logo</span>
  </div>
  <ul class="navigation">
    <li class="parent">
      <a class="link" href="#">Home</a>
    </li>
    <li class="parent">
      <a class="link" href="#">About</a>
    </li>
    <li class="parent" id="clients">
      <a class="link" href="#">
        <i class="fas fa-minus"></i> Clients
        <i class="fas fa-plus"></i>
      </a>
      <ul class="subnavigation">
        <li><a class="link" href="#">Burger King</a></li>
        <li><a class="link" href="#">Southwest Airlines</a></li>
        <li><a class="link" href="#">Levi Strauss</a></li>
      </ul>
    </li>
    <li class="parent" id="services">
      <a class="link" href="#"
        ><i class="fas fa-minus"></i> Services <i class="fas fa-plus"></i
      ></a>
      <ul class="subnavigation">
        <li><a class="link" href="#">Print Design</a></li>
        <li><a class="link" href="#">Web Design</a></li>
        <li><a class="link" href="#">Mobile App Development</a></li>
      </ul>
    </li>
    <li class="parent"><a class="link" href="#">Contact</a></li>
  </ul>
</nav>

<a
  href="https://dribbble.com/shots/5844983-Sub-Nav-Interaction-Concept"
  class="signature"
  target="_blank"
  >Designed by Carson Monroe</a
>

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ea4f4c 0%, #6d0019 100%);

  .signature {
    font-style: italic;
    font-size: 12px;
    color: #212121;
    padding-top: 15px;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      color: white;
    }
  }
}

.navigationWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #222;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  color: white;
  text-transform: uppercase;
  overflow: hidden;
  width: 600px;

  .logoWrapper {
    display: flex;

    .stylish {
      font-weight: bold;
    }

    .logo {
      padding-left: 4px;
      color: #ea4f4c;
    }
  }

  .navigation {
    display: flex;
    list-style-type: none;

    li {
      opacity: 1;
      list-style-type: none;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }

    .parent {
      padding: 0 10px;
      cursor: pointer;

      .link {
        position: relative;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        color: white;

        &:hover {
          color: #ea4f4c;
        }

        .fa-minus {
          opacity: 0;
          transition: all 0.3s ease-in-out;
          position: absolute;
          left: -16px;
          top: 3px;
        }

        .fa-plus {
          opacity: 1;
          transition: all 0.3s ease-in-out;
        }

        .fas {
          color: #ea4f4c;
          margin: -2px 4px 0;
          font-size: 10px;
          transition: all 0.3s ease-in-out;
        }
      }
    }

    .subnavigation {
      display: none;
      list-style-type: none;
      width: 500px;
      position: absolute;
      top: 40%;
      left: 25%;
      margin: auto;
      transition: all 0.3s ease-in-out;
      background-color: #222;

      li a {
        font-size: 17px;
        padding: 0 5px;
      }
    }
  }
}

.active.parent {
  transform: translate(-40px, -25px);
  .link {
    font-size: 12px;

    .fa-minus {
      opacity: 1 !important;
      font-size: 8px;
    }

    .fa-plus {
      opacity: 0 !important;
    }
  }

  .subnavigation {
    display: flex;
  }
}

.active#clients {
  .subnavigation {
    transform: translate(-150px, 17px);
  }
}

.active#services {
  .subnavigation {
    transform: translate(-290px, 17px);
  }
}

.invisible {
  opacity: 0 !important;
  transform: translate(50px, 0);
}
