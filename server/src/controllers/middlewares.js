let isEmployee = (req, res, next) =>{
    console.log(req.session)
    if(req.session.loggedIn === true && req.session.Role === 'Nhân viên'){
        res.locals.ID = req.session.ID;
        next();
    }
    else{
        res.json({status: false, message: 'Vui lòng đăng nhập'})
    }  
}

let isCandidate = (req, res, next) =>{
    if(req.session.loggedIn === true && req.session.Role === 'Ứng viên'){
        res.locals.ID = req.session.ID;
        next();
    }
    else{
        res.json({status: false, message: 'Vui lòng đăng nhập'})
    }
}

module.exports = {
    isEmployee: isEmployee,
    isCandidate: isCandidate
}  
