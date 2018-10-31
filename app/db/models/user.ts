import Sequelize from "sequelize";

export interface IUserAttributes {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createAt?: string;
    updatedAt?: string;
}

export interface IUserInstance extends Sequelize.Instance<IUserAttributes> {
    id: string;
    createAt: string;
    updatedAt: string;

    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export default (sequelize: Sequelize.Sequelize) => {
    const attributes: SequelizeAttributes<IUserAttributes> = {
        email: {type: Sequelize.STRING, allowNull: false},
        firstName: {type: Sequelize.STRING, allowNull: true},
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        lastName: {type: Sequelize.STRING, allowNull: false},
        password: {type: Sequelize.STRING, allowNull: false},
    };

    return sequelize.define<IUserInstance, IUserAttributes>("User", attributes);
};
