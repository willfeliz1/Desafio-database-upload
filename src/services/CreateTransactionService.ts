import {
  getCustomRepository,
  getRepository,
  TransactionRepository,
} from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}
class CreateTransactionService {
  public async execute({
    title,
    type,
    value,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = await transactionsRepository.getBalance();

    if (type === 'outcome' && balance.total < value) {
      throw new AppError('Outcome value cant be higher than your balance');
    }

    const categoryRepository = getRepository(Category);

    let findCategory = await categoryRepository.findOne({
      where: {
        title: category,
      },
    });

    if (!findCategory) {
      findCategory = categoryRepository.create({
        title: category,
      });
    }

    await categoryRepository.save(findCategory);

    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      category: findCategory,
    });
    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
