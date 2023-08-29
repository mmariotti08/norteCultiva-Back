const { User } = require("../../db");
const { transporter } = require("../../mail/mailer");


const createUserHandler = async ({ name, mail, password, address }) => {
    try {
        



        const [ user, create ] = await User.findOrCreate({
            where: { mail },
            defaults: { name, password, address }
        })



        if ( create ) {


            const userData = {
                id: user.id,
                name: user.name,
                mail: user.mail,
            }


            //const registrationMail = {
            //    from: "shopconnecthenry@gmail.com", 
            //    to: mail,
            //    subject: "Bienvenido a ElNorteCultiva",
            //    html: `<p>Bienvenido ${name}, </p><p> Gracias por unite a la comunidad</p>`
            //}


            try {

                await transporter.sendMail({
                    from: "independentdev00@gmail.com",
                    to: mail,
                    subject: "Bienvenido a ElNorteCultiva, una de las mejores comunidades de cultivo del Norte argentino y todo el pais",
                    html: `<h1> Welcome ${name}, </h1><h2>Gracias por unirte a nosotros.</h2>`
                })

                return { message: "Nuevo usuario regristrado con éxito", userData }

            } catch (error) {
                
                console.log("Error al enviar Mail", error)
                return  { message: "nuevo usuario registrado correctamente pero falló el envio del registro por email", userData}

            }

        } else {


            return { message : `email: ${mail} ya fue registrado anteriormente`}


        }




    } catch (error) {




        return { message: error.message }




    }
}

 module.exports = {createUserHandler}; 