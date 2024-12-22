from fastapi import APIRouter
  
from app.review.dao import ReviewDAO
from app.review.schemas import SReview

  
router = APIRouter(
    prefix="/review",
    tags=["Отзывы"],
)

  
@router.get("")
async def get_reviews() -> list[SReview]:
    return await ReviewDAO.find_all()