export interface IPerson {
	name: string
	age: number
}

export interface IUser extends IPerson {
	uuid: string
	signUpDate: Date
}