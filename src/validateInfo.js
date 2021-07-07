export default function validate(values) {
      let errors= {}

      if(!values.username.trim().length < 4) {
            errors.username ="a imię?Musisz wpisać co najmniej 4 znaki"
      }
       
      if (!values.email) {
            errors.email = 'podaj maila';
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'nie kłam, to nie twój mail';
          }
          if (!values.password) {
            errors.password = '12345# przeciesz to proste';
          } else if (values.password.length < 6) {
            errors.password = 'omg, raz-dwa-trzy-czery-pięć-hasztag, jasne?';
          }
        
          if (!values.password2) {
            errors.password2 = 'człowieniu, tu powtarzasz te cyferki z hasztagiem';
          } else if (values.password2 !== values.password) {
            errors.password2 = 'czizaz, źle!Jeszcze raz';
          }
          return errors;
        }