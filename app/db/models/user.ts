import Sequelize from "sequelize";

interface IUserAttributes {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createAt?: string;
    updatedAt?: string;
}

type UserInstance = Sequelize.Instance<IUserAttributes> & IUserAttributes;

export default (sequelize: Sequelize.Sequelize) => {
    const attributes: SequelizeAttributes<IUserAttributes> ={
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        firstName: {type: Sequelize.STRING, allowNull: true},
        lastName: {type: Sequelize.STRING, allowNull: false},
        email: {type: Sequelize.STRING, allowNull: false},
        password: {type: Sequelize.STRING, allowNull: false},
    };

    return sequelize.define<UserInstance, IUserAttributes>("User", attributes);
}