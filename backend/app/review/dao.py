from app.dao.base import BaseDAO
from sqlalchemy import insert
from app.database import async_session_maker
from app.review.models import Review
  
class ReviewDAO(BaseDAO):
    model = Review

    @classmethod
    async def add(
        cls,
        userName: str,
        review: str
    ):
        async with async_session_maker() as session:
                add_review = (
                    insert(Review)
                    .values(
                        userName=userName,
                        review=review,
                    )
                    .returning(
                        Review.id, 
                        Review.userName, 
                        Review.review,
                    )
                )

                new_booking = await session.execute(add_review)
                await session.commit()
                return new_booking.mappings().one()