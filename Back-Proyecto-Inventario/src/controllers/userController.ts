import { Request, Response } from 'express';

export const userController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(404).json({ error: 'User not found', message: error });
    }
};

