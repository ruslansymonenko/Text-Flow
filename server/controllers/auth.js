import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Register
export const register = async (req, res) => {
  try{
    const {username, password} = req.body;

    const isUsed = await User.findOne({username});

    if(isUsed) {
      return res.json({
        message: 'Це ім\'я користувача вже використовується'
      })
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username, 
      password: hash,
    })

    await newUser.save();

    res.json({
      newUser, 
      message: 'Реєстрація пройшла успішно',
    })

  } catch (rerror) {
    res.json({
      message: 'Помилка при створенні нового користувача'
    })
  }
}
//Login
export const login = async (req, res) => {
  try{
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(!user) {
      return res.json({
        message: 'Такого користувача не знайдено'
      })
    }

    const isPasswordCoorect = await bcrypt.compare(password, user.password);

    if(!isPasswordCoorect) {
      return res.json({
        message: "Невірний пароль"
      })
    }

    const token = jwt.sign({
      id: user._id,
      }, 
      process.env.JWT_SECRET,
      {expiresIn: '30d'},
    );

    res.json({
      token, 
      user, 
      message: 'Ви увійшли в систему',
    })

  } catch (rerror) {
    res.json({
      message: 'Помилка при авторизації'
    })
  }
}

//Get me
export const getMe = async (req, res) => {
  try{

  } catch (rerror) {
    
  }
}