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

@router.post("")
async def add_review(
    userName: str,
    review: str
):
    review = await ReviewDAO.add(
        userName,
        review,
    )
    
    # booking = TypeAdapter(SNewBooking).validate_python(booking).model_dump()
    return review
