import Topbar from "../../Components/Topbar/Topbar";
import "./Signup.css";
import {Link} from "react-router-dom";
import useSignup from "../../useSignup";
import validate from '../../validateInfo';

export default function Signup() {
      const { handleChange, handleSubmit, values, errors } = useSignup(
            validate
          );

      return(
            <div className="form-content-right">
                  <form className="form" onSubmit={handleSubmit} noValidate>
                        <h1>Podaj nam swoje dane byśmy je sprzedali:D</h1>
                        <div className="form-inputs">
                              <label  className="form-label">Ksywka:
                              </label>
                              <input id="username" type="text" name="username" 
                                    className="form-input" placeholder="Tu wpisz swoje imię"
                                     /* Tu blokuje ▼ */
                                     value={values.username}
                                     onCgange={handleChange}/>
                                     {errors.username && <p>{errors.username}</p>}
                        </div>

                        <div className="form-inputs">
                              <label
                              id="email"  className="form-label">
                                  Email:
                              </label>
                              <input type="email" name="email" 
                                    className="form-input" placeholder="A tu adres mail" 
                                    value={values.email}
                                    onCgange={handleChange}/>
                                    {errors.email && <p>{errors.email}</p>}
                        </div>

                        <div className="form-inputs">
                              <label
                              id="password"  className="form-label">
                                  Hasło:
                              </label>
                              <input type="password" name="password" 
                                    className="form-input" placeholder="Tu wpisz 12345#"
                                    value={values.password}
                                     onCgange={handleChange}/>
                                     {errors.password && <p>{errors.password}</p>}
                        </div>

                        <div className="form-inputs">
                              <label
                              id="password2"  className="form-label">
                                  Dasz rade powtórzyć?:
                              </label>
                              <input type="password" name="password2" 
                                    className="form-input" placeholder="O tu, jeszcze raz te cyferki..."
                                    value={values.password2}
                                     onCgange={handleChange}/>
                                     {errors.password2 && <p>{errors.password2}</p>}
                        </div>
                        <button className="form-input-btn"type="submit">Bum! Poszło...</button>
                        <span className="form-input-login">Dałeś nam już swoje dane? To po co tu klikłeś? Idz <Link to="./login">tu</Link>!</span>
                  </form>
            </div>

      )
}