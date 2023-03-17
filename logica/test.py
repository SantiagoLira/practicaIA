from logica.modelos import usuarios as u


def create_user(nick_name, fullname):
    try:
        
        user = u.Users(nick_name=nick_name, fullname=fullname)
        u.session.add(user)
        u.session.commit()
        return f"alta exitosa {user.nick_name}"
    except Exception as error:
        u.session.rollback()
        raise Exception(error)


def view_user():
    datos = u.Users()
    try:
        u.session.get()
        u.session.commit()
        return datos
    except Exception as error:
        u.session.rollback()
        raise Exception(error)
