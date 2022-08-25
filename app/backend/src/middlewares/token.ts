import * as Jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import { InvalidToken, TokenNotFound } from '../errors';

class Token {
  private static secret: string = process.env.JWT_SECRET || 'jwt-basic';

  public static async generateToken(content: unknown): Promise<string> {
    const payload: string = JSON.stringify(content);
    const token = Jwt.sign(payload, Token.secret);

    return token;
  }

  public static async validateToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<string> | void> {
    const token = req.headers.authorization;

    if (!token) throw new TokenNotFound();

    let valid;
    try {
      valid = Jwt.verify(token, Token.secret);
    } catch (e) {
      throw new InvalidToken();
    }

    req.body = { ...req.body, user: valid };
    next();
  }
}

export default Token;
